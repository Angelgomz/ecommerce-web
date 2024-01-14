<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException; 
class AuthenticatedUserController extends Controller
{
    /**
     * Show the authenticated user's info.
     *
     *
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $user = Auth::user();
        if ($user) {
            return response()->json([
                'success' => true,
                'user' => UserResource::make($user),
            ]);
        }
        return response()->json([
            'success' => false,
            'user' => null,
        ], 422);
    }

    /**
     * Update the authenticated user's info.
     *
     *
     * @return \Illuminate\Http\Response
     */
    public function updateInfo(Request $request){
        $validated = $request->validated(); 
        $user = $request->user();
        $user->fill($validated);
        if ($request->hasFile('avatar')) {
            $user->avatar_path = $request->avatar->storePublicly('public/img/users/avatars');
        }

        if ($user->isDirty('email') && $user instanceof MustVerifyEmail) {
            $user->email_verified_at = null;
            $user->sendEmailVerificationNotification();
        }
        $user->save();
        return UserResource::make($user);
    }

    /**
     * Update the authenticated user's password.
     *
     *
     * @return \Illuminate\Http\Response
     */
    public function updatePassword(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'current_password' => 'required|string',
            'password' => 'required|string|min:8|confirmed',
        ]);

        if (! Hash::check($validated['current_password'], $user->password)) {
            throw ValidationException::withMessages([
                'current_password' => [trans('The provided password does not match your current password.')],
            ]);
        }

        $user->update(['password' => Hash::make($validated['password'])]);

        return UserResource::make($user);
    }
}
