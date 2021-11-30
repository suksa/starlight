import styled from "styled-components"
import { Route, Switch } from 'react-router-dom'
import StarLightBreaker from './StarLightBreaker'
import Intro from './Intro'

const App = () => {

  return (
    <Style>
      <Switch>
        <Route path="/StarLightBreaker" component={StarLightBreaker} />
        <Route path="/" component={Intro} />
      </Switch>
    </Style>
  )
};
const Style = styled.div``
export default App;
