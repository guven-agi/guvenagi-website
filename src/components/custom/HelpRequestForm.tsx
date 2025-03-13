import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HelpRequestForm() {
  return (
    <div className="px-6 py-4 bg-neutral-200 w-96">
      <div className="text-2xl text-center pb-8">Yardım Talebi</div>
      <form className="flex flex-col gap-4">
        <Input id="name" name="name" placeholder="Tam Isim" />
        <Input name="email" placeholder="Mail" />
        <Input name="phone" placeholder="Telefon Numarası" />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Sebep" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          name="detaıls"
          placeholder="Açıklama (Durumunuzu elinizden geldiği kadarıyla açıklayınız, bu hem size yardımcı olmamızı hem de yardım isteğinizi doğru kişilere ulaştırmamıza yardımcı olucak)"
          rows={5}
        />
        <Button>Yardım İsteği Gönder</Button>
      </form>
    </div>
  );
}
