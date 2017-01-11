<?php

namespace App\Modules\Login\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Response;
use Hash;
use DB;


/*==== Define Model (Start)===*/
use App\User;
use App\AccessTokens;


class LoginwebserviceController extends Controller
{
    public function hello()
    {
        //This is a testing function
    	echo 'hi';
    }
    /*--------------User Login Function----------------------------*/
    public function userLogin(Request $request)
    {
        $input =  $request->all();
        if(!empty($request->input('email')) && !empty($request->input('password')))
        {

            $credntial = array(
                               'email' => $request->input('email'),
                               'password' => $request->input('password'),
                               'role' =>1
                              );
            if(Auth::attempt($credntial,true) )
            {
                //die();
                $userDetails = User::where('email',$request->input('email'))->get()->first()->toArray();
                $user_id = $userDetails['id'];
                $access_token = rand(1000,9999).time();
                $insertdata = array('uid'=>$user_id,
                                'token_creation_time'=>date('Y-m-d H:i:s'),
                                'token'=>$access_token);
                $tokenid = AccessTokens::insertGetId($insertdata);
                $data=array('status'=>1,'api_token'=>$access_token,'data'=>$userDetails,'message'=>'Successfully Login');
            }
            else
            {
               $data = array('status'=>0,'message'=>'Invalid  Details');
            }
        }
        else
        {
           $data = array('status'=>0,'message'=>'Invalid Token');
        }
        return Response::json($data);
        exit;
       
    }
}
