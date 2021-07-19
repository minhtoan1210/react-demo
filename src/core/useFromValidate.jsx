import  { useState } from 'react';
let emailPattern = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i
// import { Container } from './styles';

export default function useFromValidate(initialForm, validate) {
    let { rule,message,options } = validate;
    //  if(!options)
    //  {
    //   options={};
    //  }
    //  let v = initialForm
    //  if(options.localS)



    let [form, setForm] = useState(initialForm);
    
    let [error, setError] = useState({});


function inputChange(e)
{
  let name = e.target.name
  let value = e.target.value
  let type = e.target.type

  if(type === "checkbox")
  {
    value = e.target.checked;
  }
  setForm({
    ...form,
    [name]:value
  })
}
function check()
{
    let errorObj = {}
    for(let i in rule)
    {
        let r = rule[i];
        let m = message?.[i] || null

        if(r.required && !form[i])
        {
            
            errorObj[i] = m?.required || "Trường này không được để trống";
        
        }
        if(r.required && form[i])
        {
            let pattern = r.pattern
            if(pattern === 'email') pattern = emailPattern
             //lưu ý try catch
            try
            {
              if(!pattern.test(form[i]))
              {
                  errorObj[i] = m?.pattern ||"Trường này sai ";
              }
            }
            catch(err){}
           
            
        }
        
        
       
       
    }



    setError(errorObj);
    return errorObj;
    
}
// lưu ý khi trả về giá trị thì nhớ {} còn () trả về các thẻ html 
  return {
    form,error,inputChange,check
  }
}

