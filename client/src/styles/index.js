import styled from "styled-components";

export const StepContainer = styled.div`
  margin: auto;
  width: 50%;
  position: relative;
  padding-bottom: 50px;
`;

export const ButtonContainer = styled.div`
  height: 50px;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const FormContainer = styled.div`
  height: 30rem;
  transition: all ease 0.3s;
  opacity: ${props=> props.showing ? '1' : '0'}
`;

export const FormWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 2rem;
  flex-direction: column;
`;

export const FormItemTitle = styled.div`
  padding: 0.5rem 0;
  text-align: center;
`;

export const Box = styled.div`
  border: ${props => props.selected ? '2px solid #8f9ed6' : '2px solid grey'};
  background: ${props => props.selected ? '#dedeff' : '#f9f9f9'};
  text-align: center;
  border-radius: 7px;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.3);
  transition: all ease 0.3s;
  &:hover {
    transform: translateY(-3px);
    transition: all ease 0.3s;
    box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.35);
    cursor: pointer;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 3px;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  background: ${({ disabled }) => (disabled ? "#c1c1c1" : "#0373fc")};
  transition: all ease 0.3s;
  box-shadow: ${props =>
    props.disabled ? "" : "#2px 2px 10px rgba(0, 0, 0, 0.3)"};
  &:hover {
    transform: ${props => (props.disabled ? "" : "translateY(-3px)")};
    transition: ${props => (props.disabled ? "" : "all ease 0.3s")};
    box-shadow: ${props =>
      props.disabled ? "" : "2px 2px 20px rgba(0, 0, 0, 0.35)"};
    cursor: ${props => (props.disabled ? "" : "pointer")};
  }
  &:focus {
    outline: ${props => (props.disabled ? "" : "0")};
  }
`;

export const RadioContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
`;

export const RadioGroup = styled.div`
  display: flex;
`;
export const RadioItem = styled.label`
margin-bottom: .5rem;
position: relative;
display: block;
min-height: 1.5rem;
padding-left: 1.5rem;
min-height: 1.5rem;
padding-left: 1.688rem;
&:hover {
  cursor: pointer;
}
input{
   position: absolute;
   z-index: -1;
   opacity: 0;
   overflow: visible;
   margin: 0;
}
label{
  position: static;
  margin-bottom: 0;
  display: inline-block;
  &::before{
    border-radius: 50%;
    pointer-events: all;
    border-radius: 50%;
    top: .1875rem;
    left: 0;
    width: 1.125rem;
    height: 1.125rem;
    background-color: #fff;
    border: 1px solid #becad6;
    transition: all 250ms cubic-bezier(.27,.01,.38,1.06);
    box-shadow: none;
    position: absolute;
    display: block;
    pointer-events: none;
    content: "";
    user-select: none;
  }
  &::after{
    content: '';
    border-radius: 50%;
    -webkit-transform: scale(0);
    transform: scale(0);
    background-image: none!important;
    position: absolute;
    background: #fff;
    width: 8px;
    height: 8px;
    top: 8px;
    left: 5px;
    transition: all 250ms cubic-bezier(.27,.01,.38,1.06);
    transition-delay: .1s;
    opacity: 0;
    transform: scale(0);
    top: .1875rem;
    width: 1.125rem;
    height: 1.125rem;
    background-size: 50% 50%;
    position: absolute;
    left: -1.5rem;
    display: block;
    content: "";
    background-repeat: no-repeat;
    background-position: center center;
  }
}
`;
