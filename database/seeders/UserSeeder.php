<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // create admin
        $admin = new User;
        $admin->name = 'Admin';
        $admin->phone = '0560314280';
        $admin->role = 'administrateur';
        $admin->email = 'admin@gmail.com';
        $admin->password = Hash::make('123456');

        $admin->save();

        // create user
        $user = new User;
        $user->name = 'Client';
        $user->phone = '0560314280';
        $user->email = 'client@gmail.com';
        $user->password = Hash::make('123456');

        $user->save();
    }
}
