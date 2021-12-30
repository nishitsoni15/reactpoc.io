import styled, { StyledComponent } from "styled-components";

export const Background = styled.div`
background-color:#66617B;
width:600px;
height:660px;

border-radius:0px 20px 20px 0px;
position:relative;
`
// export const Leftdiv = styled.div`
// background-color:purple;
// width:1000px;
// border-radius:0px 20px 20px 0px;
// `
// export const Rightdiv = styled.div`
// background-color:yellow;
// width:1000px;
// position:relative;
// `

export const Form = styled.form`
position:absolute;
z-index:1;
display: flex;
flex-direction: column;
margin-top:20px;
margin-left:430px;
width:300px;
text-align:left;
height:640px;
background-color:white;
box-shadow:2px 2px 2px 2px;
border-radius:20px;
padding:0 20px;

`
export const Header = styled.h1`
color:#367A9D;
padding-top:70px;
`
export const Para = styled.p`
font-size:25px;
margin-top:-10px;
color:#fffffff;
`
export const Label = styled.label`
margin-top:10px;
`

export const Input1 = styled.input`
padding:5px;
margin-top:10px;
border:1px solid #E7EAEC;
`
export const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 1px solid #E7EAEC;
padding: 1em 1em;
margin-top:25px;
color: #464C7D;
`
