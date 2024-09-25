import Creatable from "react-select/creatable";
import React from "react";
import Select, { components } from "react-select";
import { useTranslation } from "react-i18next";
import { Container } from "./styles";
import { InputText } from "../InputText";
import { GroupedOption, SelectOption } from "../../util/interfaces";
import { getTextColor, labelColor, prepareGroupsForSelect } from "./lib.ts";


interface Props {
  autoFocus?: boolean;
  iconRight?: boolean;
  placeholder?: string;
  inputType?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "date"
    | "file[]"
    | "time"
    | "breakTime";
  disabled?: boolean;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: string) => void;
  iconFunction?: () => void;
  iconSrc?: string;
  iconType?: "right" | "left";
  defaultValue?: any;
  options?: Array<SelectOption>;
  label: string;
  multi?: boolean;
  filterName?: string;
  type: "input" | "select" | "creatable" | "textarea";
  color?: labelColor;
  errorText?: string;
  error?: boolean;
}

export function Label({
  autoFocus = false,
  placeholder,
  inputType = "text",
  onKeyDown,
  onChange,
  iconFunction,
  iconSrc,
  iconType,
  options,
  type,
  defaultValue = "",
  label,
  disabled = false,
  multi = false,
  filterName,
  color,
  errorText,
  error,
  
}: Props) {
  const { t } = useTranslation();
  let groupedOptions: GroupedOption[] = [];

  // Here the options are grouped by the group property
  if (type == "select") {
    groupedOptions = prepareGroupsForSelect(options);
  }

  const NoOptionsMessage = (props: any) => {
    return (
      <components.NoOptionsMessage {...props}>
        <span className="custom-css-class">{t("NoOptions")}</span>
      </components.NoOptionsMessage>
    );
  };

  return (
    <Container 
    $isinput={type == "input" ? "1" : "0"} 
    $color={getTextColor(color)}
    $error = {error}
    $errorText= {errorText}
    $errorTranslate={t('Error')+': '}
    >
      <label className="labelContainer">
        <div className="labelHeader">
          <p className={"labelText"}>{label}</p>
        </div>
        <div className={"labelContent"}>
          {type == "input" ? (
            <InputText
              autoFocus={autoFocus}
              typeInput={inputType}
              onChange={onChange}
              placeholder={placeholder}
              onKeyDown={onKeyDown}
              iconFunction={iconFunction}
              iconSrc={iconSrc}
              iconType={iconType}
              disabled={disabled}
              visibility={true}
              value={defaultValue}
              options={options}
              filterName={filterName}
              error={error}
            />
          ) : type == "select" ? (
            <Select
              className={"selectStyle"}
              isMulti={multi}
              components={{ NoOptionsMessage }}
              formatGroupLabel={(data) => (
                <div className="groupStyles">
                  <h4 className="headerstyle">{data.label}</h4>
                </div>
              )}
              defaultValue={defaultValue}
              options={groupedOptions}
              onChange={onChange}
              styles={{
                //Builtins doesn't use classes, so we need to use inline styles
                indicatorSeparator: () => ({
                  display: "none",
                }),
                control: (baseStyles: any) => ({
                  ...baseStyles,
                  marginTop: "-8px",
                  height: "38px",
                  width: "100%",
                }),
                option: (baseStyles: any) => ({
                  ...baseStyles,
                  paddingLeft: "40px",
                  fontSize: "16px",
                  fontFamily: "Inter",
                  fontWeight: "400",
                }),
                menu: (base) => ({
                  ...base,
                  marginTop: "2px",
                  zIndex: "200",
                }),
              }}
            />
          ) : type == "creatable" ? (
            <Creatable
              components={{ NoOptionsMessage }}
              autoFocus={autoFocus}
              formatGroupLabel={(data) => (
                <div className="groupStyles">
                  <h4 className="headerstyle">{data.label}</h4>
                </div>
              )}
              value={defaultValue}
              placeholder={placeholder}
              options={groupedOptions}
              onChange={onChange}
              styles={{
                //Builtins doesn't use classes, so we need to use inline styles
                indicatorSeparator: (baseStyles: any) => ({
                  ...baseStyles,
                  display: "none",
                }),
                option: (baseStyles: any) => ({
                  ...baseStyles,
                  paddingLeft: "40px",
                  fontSize: "16px",
                  fontFamily: "Inter",
                  fontWeight: "400",
                }),
                control: (baseStyles: any) => ({
                  ...baseStyles,
                  marginTop: "-8px",
                  height: "38px",
                  width: "100%",
                }),
                menu: (base) => ({
                  ...base,
                  marginTop: "2px",
                  zIndex: "200",
                }),
              }}
            />
          ) : (
            onChange && (
              <textarea
                className={"textAreaStyle"}
                disabled={disabled}
                placeholder={placeholder}
                autoFocus={autoFocus}
                onChange={(e) => onChange(e.target.value)}
                value={defaultValue}
                rows={4}
                cols={30}
              />
            )
          )}
        </div>
      </label>
      <div className="errorDiv"></div>
    </Container>
  );
}
