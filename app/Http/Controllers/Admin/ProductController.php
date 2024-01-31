<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return response()->json([
            'status' => 'success',
            'data' => $products,
            'message' => 'Products fetched successfully'
        ]);
    }

    public function store(StoreProductRequest $request)
    {
        $data = $request->validated();
        $product = Product::create($data);

        return response()->json([
            'status' => 'success',
            'data' => $product,
            'message' => 'Producto creado sastifactoriamente'
        ]);
    }

    public function update(UpdateProductRequest $request, Product $product)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            // Add more validation rules as needed
        ]);

        $product->update($request->all());

        return response()->json([
            'status' => 'success',
            'data' => $product,
            'message' => 'Product updated successfully'
        ]);
    }

    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Product deleted successfully'
        ]);
    }
}
