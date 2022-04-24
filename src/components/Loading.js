import React from 'react';
import ReactLoading from 'react-loading';
import { Section, Title, Article, Prop, list } from "./Loading-libreria";
import "./styles-loading.css";

const Loading = ({ type, color }) => {

const Example = () => (
    <Section>
      <Title>React Loading</Title>
      {list.map(l => (
        <Article key={l.prop}>
          <ReactLoading type={l.prop} color="#fff" />
          <Prop>{l.name}</Prop>
        </Article>
      ))}
    </Section>
  );

return(
	<ReactLoading type={Example.bubbles} color={color} height={667} width={375} />
);
}
export default Loading;