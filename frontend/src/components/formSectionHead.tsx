interface Props {
  title: string;
  count: number;
}

const FormSectionHead = ({ count, title }: Props): JSX.Element => (
  <div className="flex justify-center mb-2">
    <div
      className="flex gap-2 after:bg-primary
  after:h-[2.5px] after:absolute relative after:w-full after:bottom-0 pb-3 after:rounded-sm my-2"
    >
      <span className=" text-primary font-semibold aspect-square rounded-full w-6 text-center">
        {count}.
      </span>
      <h2 className="text-primary">{title}</h2>
    </div>
  </div>
);

export default FormSectionHead;
