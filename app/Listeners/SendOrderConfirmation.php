<?php

namespace App\Listeners;

use App\Events\OrderPlaced;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;
use App\Mail\OrderConfirmationEmail;

class SendOrderConfirmation implements ShouldQueue
{
    use InteractsWithQueue;

    public function handle(OrderPlaced $event)
    {
        Mail::to($event->order->customer_email)->send(new OrderConfirmationEmail($event->order));
    }
}
