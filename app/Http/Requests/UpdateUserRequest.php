<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
       // dd($this->all());
  
        return [
            'name' => ['string', 'max:255'],
            'lastname' => ['string', 'max:255'],
           'address' => ['string', 'max:300'],
           /* 'email' => ['string', 'email', 'max:255', 'unique:users'],
            'phone' =>['regex:/^\+(?:[0-9] ?){6,14}[0-9]$/'],
            'commune_id' => ['exists:communes,id']  */ 
        ];
    }
}
