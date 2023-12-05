export const filterOption = (inputValue: string, option: any) => {
    return (
      option.children?.toString()?.toUpperCase()?.indexOf(inputValue.toUpperCase()) !== -1 ||
      option.value?.toString().indexOf(inputValue) !== -1
    );
  };