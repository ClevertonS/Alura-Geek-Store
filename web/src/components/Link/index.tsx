import NxtLink, { LinkProps } from 'next/link';

type INxtLink = LinkProps & {
  // eslint-disable-next-line react/require-default-props
  children?: any;
};

export function Link({ href, children }: INxtLink) {
  return (
    <NxtLink href={href}>
      {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="flex">{children}</a>
    </NxtLink>
  );
}
