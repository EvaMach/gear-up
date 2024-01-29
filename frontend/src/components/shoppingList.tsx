import FormSectionHead from './formSectionHead';

const ShoppingList = (): JSX.Element => {
  return (
    <>
      <FormSectionHead count={2} title="Je třeba koupit" />
      <div className="shadow-sm rounded-lg p-2 bg-white mb-2 w-full lg:w-1/2">
        Zatím nemáš nic na seznamu.
      </div>
    </>
  );
};

export default ShoppingList;
