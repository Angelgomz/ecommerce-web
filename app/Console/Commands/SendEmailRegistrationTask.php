<?php

namespace App\Console\Commands;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use App\Mail\UserWelcome;
use Carbon\Carbon;

class SendEmailRegistrationTask extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:send-email-registration-task';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        \Log::info('test');
        $users = User::whereDate('created_at', Carbon::today())->get();
        if($users->isNotEmpty()){
        foreach ($users as $user) {
            Mail::to($user->email)->send(new UserWelcome($user));
        } 
    }
    }
}
