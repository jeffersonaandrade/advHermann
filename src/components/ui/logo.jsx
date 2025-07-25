import { memo } from 'react';
import { cn } from '@/lib/utils.js';
import logoImage from '@/assets/logo-adv.png';

const Logo = memo(({ 
  size = 'md', 
  className, 
  showText = true, 
  variant = 'full' 
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8', 
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
    '2xl': 'w-24 h-24'
  };

  const textSizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  };

  const LogoIcon = () => (
    <img 
      src={logoImage}
      alt="Dr. Maurício Hermann - Advogado"
      className={cn(sizeClasses[size], 'object-contain', className)}
    />
  );

  if (variant === 'icon' || !showText) {
    return <LogoIcon />;
  }

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <LogoIcon />
      {showText && (
        <div className="flex flex-col">
          <span className={cn('font-bold text-foreground', textSizes[size])}>
            Dr. Maurício Hermann Hermann
          </span>
          {variant === 'full' && (
            <>
              <span className={cn('text-muted-foreground font-normal', textSizes[size === 'xs' ? 'xs' : 'sm'])}>
                - Advocacia Especializada -
              </span>
              <span className={cn('text-muted-foreground italic', textSizes[size === 'xs' ? 'xs' : 'sm'])}>
                Direito Civil • Trabalhista • Empresarial
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
});

Logo.displayName = 'Logo';

export { Logo }; 