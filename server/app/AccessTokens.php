<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AccessTokens extends Model
{
    protected $table    = 'devices';
    
  //  protected $fillable = ['name','slug','parent_id'];
      protected $guarded = array();
    public $timestamps = false;

   

}