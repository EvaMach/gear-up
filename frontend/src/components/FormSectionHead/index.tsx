interface Props {
  count: number;
  title: string;
}

const FormSectionHead = ({ count, title }: Props): JSX.Element => (
  <div className="flex justify-center">
    <div
      className="flex gap-2 after:bg-primary
  after:h-1 after after:absolute relative after:w-full after:bottom-0 pb-3 after:rounded-sm"
    >
      <span className="bg-primary text-s aspect-square rounded-full w-6 text-center">
        {count}
      </span>
      <h2>{title}</h2>
    </div>
  </div>
);

export default FormSectionHead;
