import { SVGProps } from "react";

type IconProps = Omit<SVGProps<SVGSVGElement>, "stroke"> & {
  size?: number;
  stroke?: number;
};

function Icon({ children, size = 20, stroke = 1.6, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function IconArrow(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </Icon>
  );
}

export function IconArrowDown(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 5v14" />
      <path d="M6 13l6 6 6-6" />
    </Icon>
  );
}

export function IconExternal(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </Icon>
  );
}

export function IconGithub(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 19c-4 1.5-4-2-6-2" />
      <path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22" />
    </Icon>
  );
}

export function IconLinkedin(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7" />
      <path d="M8 7.01v.01" />
      <path d="M12 17v-4.5a2.5 2.5 0 0 1 5 0V17" />
      <path d="M12 10v7" />
    </Icon>
  );
}

export function IconMail(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </Icon>
  );
}

export function IconSparkle(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
    </Icon>
  );
}

export function IconTerminal(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9l3 3-3 3" />
      <path d="M13 15h4" />
    </Icon>
  );
}

export function IconServer(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="13" width="18" height="7" rx="1.5" />
      <path d="M7 7.5h.01" />
      <path d="M7 16.5h.01" />
    </Icon>
  );
}

export function IconTools(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2.1-.6-.6-2.1 2.3-2.3z" />
    </Icon>
  );
}

export function IconBrain(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M8 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 3 3 3 0 0 0 1 2.2A3 3 0 0 0 5 17a3 3 0 0 0 3 3" />
      <path d="M16 4a3 3 0 0 1 3 3v1a3 3 0 0 1 2 3 3 3 0 0 1-1 2.2A3 3 0 0 1 19 17a3 3 0 0 1-3 3" />
      <path d="M12 4v16" />
    </Icon>
  );
}
