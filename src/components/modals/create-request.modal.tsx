import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {useCreateRequest} from "@/hooks/use-request";
import {X} from "lucide-react";

const CreateRequestModal = () => {
  const { isOpen, onClose} = useCreateRequest()

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Submit a withdraw request
          </DialogTitle>
          <X onClick={onClose} className="h-4 w-4 cursor-pointer" />
        </DialogHeader>
        <div className={"px-4 py-6 flex flex-col space-y-4"}>
          <p>Phone number</p>
          <p>Amount</p>
          <p>Payment type</p>
        </div>
        <DialogFooter>
          <Button className={"py-2 px-3 rounded-lg bg-white hover:bg-white text-black border-[1px] border-solid border-[#AFB8C1]"} onClick={onClose} >
            Cancel
          </Button>
          <Button variant={"login"}>
            Send Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateRequestModal;