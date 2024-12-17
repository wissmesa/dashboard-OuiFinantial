import SelectController from "../../Components/Controller/SelectController";
import TextFieldController from "../../Components/Controller/TextFieldController"
import { useForm } from "react-hook-form";
const PerClient = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFieldController 
          name="nombre"
          control={control} 
          label="nombre"
          required={true}
        />
        <TextFieldController 
          name="apellido" 
          control={control} 
          label="apellido"
        />
        <SelectController
          name="apellido" 
          control={control} 
          label="apellido"
        />
        <input type="submit" />
      </form>

    </div>
  )
}


export default PerClient