import { ReactNode } from "react";
import { Container } from "./styles";
import { ButtonIcon } from "../ButtonIcon";
import { useNavigate } from "react-router-dom";
import {Col} from "../Col";

interface Props {
  children: ReactNode;
  closeIcon: string;
  title: string;
  navigateUrl: string;
}

export const CardDetailedCharts = ({
  children,
  closeIcon,
  title,
  navigateUrl,
}: Props) => {
  const navigate = useNavigate();
  function closeModal() {
    navigate(navigateUrl);
  }

  return (
    <Container>
      <div className="close">
        <ButtonIcon img={closeIcon} functionButtonIcon={() => closeModal()} />
      </div>
      <Col width={"100%"} flex={"1"} alignItems={"center"} gap={"0"}>
        <h2 className={"titleStyle"}>{title}</h2>
        <div className={"contentStyle"}>{children}</div>
      </Col>
    </Container>
  );
};
