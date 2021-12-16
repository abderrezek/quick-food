<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAbonnezsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('abonnezs', function (Blueprint $table) {
            $table->id();
            $table->string('prenom');
            $table->string('email');
            $table->string('phone', 10)->nullable(true);
            $table->boolean('accepte_recevoir_email')->default(0);
            $table->boolean('accepte_recevoir_phone')->default(0);
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
        Schema::dropIfExists('abonnezs');
    }
}
