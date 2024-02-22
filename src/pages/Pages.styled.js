import styled from 'styled-components'

export const StyledForm = styled.form`
background: rgba(242, 233, 238, 0.3);
  padding: 40px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
  display: inline-block;
  
`
export const StyledInput = styled.input`
display: block;
 background: transparent;
    width: 260px;
    padding: 1em;
    margin-bottom: 2em;
    border-radius: 5000px;
    border: transparent;
    backdrop-filter: blur(74px);
    box-shadow: 4px 4px 60px rgba(0,0,0,0.2);
    color: #fff;
    transition: all 0.2s ease-in-out;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    
    &:hover {
      background: rgba(255,255,255,0.1);
      box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
    }
    &:focus {
        background: rgba(255,255,255,0.1);
        box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
      }
`
export const StyledLabel = styled.label`
            font-weight: 400;
            color: #fff;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
            margin-bottom: 10px;
            display: block;
            font-size: 16px;
            text-align: left;
`
export const StyledButton = styled.button`
background: transparent;
    padding: 1em;
    border-radius: 5000px;
    border: transparent;
    backdrop-filter: blur(74px);
    box-shadow: 4px 4px 60px rgba(0,0,0,0.2);
    color: #fff;
    transition: all 0.2s ease-in-out;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    margin: 0 auto;
    display: block;
    padding-left: 40px;
    padding-right: 40px;
    font-size: 16px;
    cursor: pointer;
    
    &:hover {
      background: rgba(255,255,255,0.1);
      box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
    }
`