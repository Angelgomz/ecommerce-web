<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Illuminate\Support\Facades\Storage;
use App\Models\Product;
use App\Http\Resources\V1\ProductResource;
use App\Http\Resources\V1\ProductCollection;
class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('category','ratings')->get();
        return response()->json([
            'status' => 'success',
            'data' => new ProductCollection($products),
            'message' => 'Products fetched successfully'
        ]);
    }
    public function show(Product $product){
        return new ProductResource($product);
    }
    public function store(StoreProductRequest $request)
    {
        $data = $request->validated();
        $routeImage = Storage::disk('public')->put('products', $data['image']);
        $data['image'] = $routeImage;
        $product = Product::create($data);
        return response()->json([
            'status' => 'success',
            'data' => $product,
            'routeImage' => $routeImage,
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
