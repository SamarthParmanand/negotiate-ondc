import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full text-4xl text-center font-bold flex flex-col items-center justify-center">
        NextUI Init
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button className="my-4 font-bold p-5">Great!!</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-small font-bold">
                This UI library will be used to design the application.
              </div>
              <div className="text-tiny">Smooth animations go brrrr</div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
