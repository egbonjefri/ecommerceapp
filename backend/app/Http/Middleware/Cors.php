<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next)
    {
        if ($request->isMethod('OPTIONS')) {
            return response('', 200)
                ->header('Access-Control-Allow-Origin', '*')
                ->header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization')
                ->header("Access-Control-Allow-Headers", "authorization,email,access-control-allow-methods,x-requested-with,access-control-allow-origin,access-control-allow-headers,content-type")
                ->header("Access-Control-Allow-Credentials", "true")
                ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        }
        $response = $next($request);

       
        $response->header('Access-Control-Allow-Origin', '*');
        $response->header('Access-Control-Allow-Headers', 'Origin, Content-Type');
        $response->header("Access-Control-Allow-Headers", "content-type");
        $response->header("Access-Control-Allow-Credentials", "true");
        $response->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

        return $response;

    }
}
