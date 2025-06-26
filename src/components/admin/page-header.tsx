import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type PageHeaderProps = {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function PageHeader({ title, description, children, className }: PageHeaderProps) {
  return (
    <div className={cn("flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8", className)}>
      <div className="grid gap-1">
        <h1 className="font-headline text-3xl font-bold md:text-4xl text-primary">{title}</h1>
        {description && <p className="text-lg text-muted-foreground">{description}</p>}
      </div>
      <div className='flex-shrink-0'>{children}</div>
    </div>
  );
}
