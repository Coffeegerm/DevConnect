import { Container } from "components/Container";
import { TopBar } from "components/TopBar";
import { Trunks } from "components/Trunks";
import { YourPanel } from "components/YourPanel";
import { InfoPanel } from "components/InfoPanel";
import { Row, Column } from "styles";

export default function Home() {
  return (
    <Container>
      <TopBar />
      <Row>
        <Column>
          <YourPanel />
        </Column>
        <Column>
          <Trunks />
        </Column>
        <Column>
          <InfoPanel />
        </Column>
      </Row>
    </Container>
  );
}
