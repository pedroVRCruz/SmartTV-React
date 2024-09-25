import { Container } from "./styles";

interface Props {
  autoFocus?: boolean;
  iconType?: "right" | "left";
  placeholder?: string;
  typeInput: string;
  disabled?: boolean;
  value?: string;
  filterName?: string;
  options?: Array<any>;
  visibility?: boolean;
  onKeyDown?: (e?: any) => void;
  onChange?: (e: string) => void;
  iconFunction?: () => void;
  iconSrc?: string;
  closeIconSrc?: string;
  error?: boolean;
}

export function InputText({
  autoFocus = false,
  iconType = "right",
  placeholder,
  typeInput,
  disabled = false,
  value,
  filterName,
  options = [],
  visibility = true,
  onChange,
  onKeyDown,
  iconFunction,
  iconSrc,
  closeIconSrc,
  error,
}: Props) {
  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const renderIcon = () =>
    iconFunction ? iconSrc && (
      <img className={"icon"} src={iconSrc} onClick={iconFunction} alt="" />
    ) : iconSrc && (
      <img className={"icon"} src={iconSrc} alt="" />
    );

  return (
    <Container $iconType={iconType} $visibility={visibility} $error={error}>
      {iconType === "left" && renderIcon()}
      <input
        className={"inputStyles"}
        autoFocus={autoFocus}
        type={typeInput}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
        value={value}
        list={filterName ? filterName : undefined}
      />
      {iconType === "right" && renderIcon()}
      {filterName && (
        <>
          <datalist id={filterName}>
            {options.map((option, key) => (
              <option key={key} value={option.value} />
            ))}
          </datalist>
          {closeIconSrc && (
            <img
              className={"icon"}
              src={closeIconSrc}
              onClick={iconFunction}
              alt=""
            />
          )}
        </>
      )}
    </Container>
  );
}
