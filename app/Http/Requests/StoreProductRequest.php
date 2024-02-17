<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    //public function authorize(): bool
    //{
      //  return true;
    //}
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'category_id' => ['required', Rule::exists('categories', 'id')->withoutTrashed()],
            'name' => ['required', 'string'],
            'description' => 'nullable|string',
            'image' => 'required',
            'stock' => 'required|numeric',
            'price' => 'required|numeric|between:0,9999999.99', // Adjust the maximum value as per your requirement
        ];
    }
    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages():array{
    return [
        'category_id.required' => 'El campo de categoría es obligatorio.',
        'category_id.exists' => 'La categoría seleccionada no es válida.',
        'name.required' => 'El campo de nombre es obligatorio.',
        'name.string' => 'El nombre debe ser una cadena de texto.',
        'description.string' => 'La descripción debe ser una cadena de texto.',
        'image.required' => 'Se requiere una imagen para el producto.',
        'stock.required' => 'El campo de stock es obligatorio.',
        'stock.numeric' => 'El stock debe ser un valor numérico.',
        'price.required' => 'El campo de precio es obligatorio.',
        'price.numeric' => 'El precio debe ser un valor numérico.',
        'price.between' => 'El precio debe estar entre 0 y 9,999,999.99.', // Adjust the maximum value as per your requirement
    ];
}
}