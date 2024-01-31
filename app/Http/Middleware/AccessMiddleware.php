<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Permission; 
use App\Models\Role; 
class AccessMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();
        $routeName = $request->route()->getName();
        $permission = Permission::where('route_name', $routeName)->first();
        $permissions = $user->getPermissionsViaRoles()->pluck('name');
        if($permission && $permissions->contains($permission->name)){
            return $next($request);
        }
        else{
            abort(403);
        }
    }
}
