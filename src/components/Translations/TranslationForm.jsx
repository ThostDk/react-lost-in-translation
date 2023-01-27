import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";

const OrdersForm = ({ onTranslate }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ TranslateSentence }) => {
    onTranslate(TranslateSentence);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <img
        className="translationInputFieldImg"
        alt=""
        src="https://icons.iconarchive.com/icons/icons8/ios7/512/Computer-Hardware-Keyboard-icon.png"
      ></img>
      <input
        type="text"
        {...register("TranslateSentence")}
        className="translationInputBar"
        placeholder="Translate Text here"
      />
      <Button type="submit" className="translationInputSubmitBtn">
        <img
          className="translationInputSubmitBtnArrow"
          alt=""
          src="https://www.seekpng.com/png/full/447-4470967_white-arrow-without-background.png"
        ></img>
      </Button>
    </form>
  );
};

export default OrdersForm;
