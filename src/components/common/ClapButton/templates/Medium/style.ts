import { css, SerializedStyles } from '@emotion/react'

export const style: { [key: string]: SerializedStyles } = {
  root: css`
    color: inherit;
    font-family: inherit;
    display: inline-flex;
    align-items: center;
  `,
  counter: css`
    margin-left: 0.6em;
  `,
  icon: css`
    height: 2em;
    fill: black;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  `,
  button: css`
    border: none;
    outline: none;
    cursor: pointer;
    background: transparent;
    position: relative;
    font-size: inherit;
  `,
  baloon: css`
    opacity: 0;
    position: absolute;
    font-family: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #292929;
    border-radius: 100%;
    font-size: 0.7em;
    height: 2.4em;
    width: 2.4em;
    top: -1.2em;
    left: -1.2em;
  `,
  centeredContainer: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  buttonContainer: css`
    position: relative;
  `,
}
