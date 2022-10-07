import { useFormControls } from "../hooks/useFormControls";
import Image from "next/image";

const inputFieldValues = [
  {
    name: "fullName",
    label: "Nombre Completo",
    id: "my-name"
  },
  {
    name: "email",
    label: "Email",
    id: "my-email"
  },
  {
    name: "message",
    label: "Mensaje",
    id: "my-message",
    multiline: true,
    rows: 10
  }
];
export const ContactForm = () => {
  const {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors,
    isLoading
  } = useFormControls();

  return (
    <form onSubmit={handleFormSubmit}>
      {inputFieldValues.map((inputFieldValue, index) => {
        return (
          <div className="flex flex-col max-w-lg mx-auto" key={index}>
            <label htmlFor={inputFieldValue.name} className="inline-block text-gray-900 text-sm sm:text-base mt-2 font-semibold">{inputFieldValue.label}</label>
            <input
              className={`${inputFieldValue.multiline && "h-24"} w-full bg-gray-200 text-gray-800 border focus:ring ring-primary-black rounded outline-none transition duration-100 px-3 py-2`}
              onBlur={handleInputValue}
              onChange={handleInputValue}
              name={inputFieldValue.name}
              label={inputFieldValue.label}
              rows={inputFieldValue.rows ?? 1}
              autoComplete="off"
              // {...(errors[inputFieldValue.name] && { error: true, helpertext: errors[inputFieldValue.name] })}

            />
          </div>
        );
      })}
      <div className="flex flex-col gap-3 mx-auto max-w-lg py-3">
        <button
          type="submit"
          disabled={!formIsValid()}
          className={` ${!formIsValid()&& "bg-primary-gray hover:bg-primary-gray"} w-32 bg-primary-red hover:bg-primary-red-hover active:bg-primary-red-hover focus-visible:ring ring-primary-red-hover text-white text-sm md:text-base font-semibold rounded-lg outline-none transition duration-100 px-8 py-3`}
        >
          Enviar
        </button>
        {
          !isLoading &&
        <div>
          <Image
            src="/images/iconos/loader.svg"
            alt="Enviando..."
            width={50}
            height={50}
          />
          
        </div>
        }
      </div>
    </form>
  )
}