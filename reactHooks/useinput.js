//조건에 맞는 input 입력만 받기
export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
      const {
        target: { value }
      } = event;
  
      let willUpdate = true;
  
      if (typeof validator === "function") {
        willUpdate = validator(value);
      }
  
      if (willUpdate) {
        setValue(value);
      }
    };
    return { value, onChange };
  };