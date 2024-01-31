<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
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
        return [
            'category_id' => [Rule::exists('categories', 'id')->withoutTrashed()],
            'name' => ['string', Rule::unique('products')->ignore($this->product)],
            'description' => 'string',
            'image' => 'string',
            'price' => ' numeric|between:0,9999999.99', // Adjust the maximum value as per your requirement
        ];
    }
}
