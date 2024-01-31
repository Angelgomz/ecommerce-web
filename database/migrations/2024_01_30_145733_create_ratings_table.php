<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ratings', function (Blueprint $table) {
            $table->id();
            $table->float('score');
            $table->unsignedBigInteger('user_id'); // Si cada rating pertenece a un usuario
            $table->morphs('rateable');
            //    $table->unsignedBigInteger('rateable_id');
            //   $table->string('rateable_type');          
            //  $table->integer('rating_value'); // Puedes ajustar el tipo de dato dependiendo de tus necesidades
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ratings');
    }
};
