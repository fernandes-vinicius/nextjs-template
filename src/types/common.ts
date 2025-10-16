export type LayoutProps<T = unknown> = Readonly<{ children: React.ReactNode; params: Promise<T> }>;

export type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export type Params<T = unknown> = Promise<T>;

export type PageProps<T = unknown> = Readonly<{ params: Params<T>; searchParams: SearchParams }>;
