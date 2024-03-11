<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Rating;
class RatingController extends Controller
{
    public function store(Request $request){
        $product = $request->productId;
        $validatedData = $request->validate([
            'rating' => 'required|integer|min:1|max:5',
        ]);
        $product = Product::findOrFail($product);
        $rating = new Rating(['score'=>$validatedData['rating'],
          'user_id' => 1,
          'rateable_type' => $product::class,
          'rateable_id'=> $product->id]);
       $rating->save();
       return response()->json([
            'status' => 'success',
            'ratings' => $product->load('ratings')
        ]);
    }
}
