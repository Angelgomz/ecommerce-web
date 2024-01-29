<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    //  protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Authenticate the user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email:filter',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();
        if (!$user && !Hash::check($request->password, $user->password ?? '')) {
            return response([
                'msg' => 'Credenciales incorrectas.'
            ], 401);
        }

        $token = $user->createToken($user->email);
        $user['plain_text_token'] = $token->plainTextToken;
        return response()->json(['user' => $user], 200);
    }

    /**
     * Log the user out of the application.
     *
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        $request->user()->tokens()->delete();
        return response()->json(['success'=>true], 200);
    }
}
