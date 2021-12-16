<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plats', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->float('price', 10, 2);
            $table->float('discount', 10, 2);
            $table->longText('ingredients')->nullable();
            $table->boolean('is_enabled')->default(true);
            $table->string('image')->default("default.png");
            $table->integer('number_times_selected')->unsigned()->default(0);
            $table->decimal('rating', $precision = 2, $scale = 1)->nullable();
            $table->longText('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('plats');
    }
}
