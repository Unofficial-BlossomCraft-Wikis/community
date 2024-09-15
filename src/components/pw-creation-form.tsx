"use client";

import { useState } from "react";
import { newPW } from "~/app/user/settings/my/pws/new/actions";
import { pwcategories } from "~/lib/consts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "./ui/label";

export function PWCreationForm({ userId }: { userId: string }) {
  const [name, setName] = useState("");
  const [commandName, setCommandName] = useState("");
  const [description, setDescription] = useState("");
  const [serverId, setServerId] = useState<string>(String(1));
  const [pwCategory, setPwCategory] = useState<string>(pwcategories.misc);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    try {
      // Convert serverId and pwCategory to numbers if needed
      const serverIdNum = parseInt(serverId, 10);
      await newPW(name, commandName, description, serverIdNum, userId, [], pwCategory as any);

      toast.success("PW created successfully!");
    } catch (error) {
      toast.error("Failed to create PW.");
      console.error("Error creating PW:", error);
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="PW Name (e.g. Arctic Fox Ore and Goods)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        name="command_name"
        placeholder="Command Name (e.g. ArcticFox)"
        value={commandName}
        onChange={(e) => setCommandName(e.target.value)}
      />
      <Input
        type="text"
        name="description"
        placeholder="Description (e.g. Arctic Fox Ore and Goods)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <RadioGroup 
        name="serverid" 
        value={serverId} 
        onValueChange={setServerId}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={String(1)} id="s1" />
          <Label htmlFor="s1">Cherry</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={String(2)} id="s2" />
          <Label htmlFor="s2">Spirit</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={String(3)} id="s3" />
          <Label htmlFor="s3">Lotus</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={String(4)} id="s4" />
          <Label htmlFor="s4">Tulip</Label>
        </div>
      </RadioGroup>
      <RadioGroup 
        name="pwcategory" 
        value={pwCategory} 
        onValueChange={setPwCategory}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={pwcategories.shop} id="c1" />
          <Label htmlFor="c1">Shop</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={pwcategories.town} id="c2" />
          <Label htmlFor="c2">Town</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={pwcategories.farm} id="c3" />
          <Label htmlFor="c3">Farm</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={pwcategories.base} id="c4" />
          <Label htmlFor="c4">Base</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={pwcategories.misc} id="c5" />
          <Label htmlFor="c5">Misc</Label>
        </div>
      </RadioGroup>
      <Button type="submit">Submit</Button>
    </form>
  );
}
