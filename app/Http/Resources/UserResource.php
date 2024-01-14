<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        $data = [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'address' => $this->address,
          /*  'email_verified_at' => $this->email_verified_at?->toDateTimeString(),
            'avatar_path' => $this->avatar_path,
            'avatar_url' => $this->avatar_url,
            'is_organic' => $this->is_organic,
            'google_id' => $this->google_id, */ 
            'created_at' => $this->created_at->toDateTimeString(),
            'updated_at' => $this->updated_at->toDateTimeString(),
          /*  'deleted_at' => $this->deleted_at?->toDateTimeString(), */ 
         /*   'company' => CompanyResource::make($this->whenLoaded('company')),
            'membership' => MembershipResource::make($this->whenLoaded('membership')), */ 
           /* 'roles' => RoleResource::collection($this->whenLoaded('roles')), */ 
            /*'permissions' => PermissionResource::collection($this->whenLoaded('permissions')), */ 
            /*'allPermissions' => $this->when(
                $this->relationLoaded('roles') && $this->relationLoaded('permissions'),
                fn () => PermissionResource::collection($this->getAllPermissions())
            ), */ 
        ];

        return $data;
    }
}
