import * as eslint from 'eslint';

declare const _default: {
    meta: {
        name: string;
        version: string;
    };
    environments: {
        astro: {
            globals: {
                Astro: boolean;
                Fragment: boolean;
            };
        };
    };
    rules: {
        [key: string]: eslint.Rule.RuleModule;
    };
    processors: {
        ".astro": eslint.Linter.Processor<string | eslint.Linter.ProcessorFile>;
        astro: eslint.Linter.Processor<string | eslint.Linter.ProcessorFile>;
        "client-side-ts": eslint.Linter.Processor<string | eslint.Linter.ProcessorFile>;
    };
} & {
    configs: {
        base: eslint.Linter.LegacyConfig;
        recommended: eslint.Linter.LegacyConfig;
        all: eslint.Linter.LegacyConfig;
        "jsx-a11y-strict": eslint.Linter.LegacyConfig;
        "jsx-a11y-recommended": eslint.Linter.LegacyConfig;
        "flat/base": eslint.Linter.Config[];
        "flat/recommended": eslint.Linter.Config[];
        "flat/all": eslint.Linter.Config[];
        "flat/jsx-a11y-strict": eslint.Linter.Config[];
        "flat/jsx-a11y-recommended": eslint.Linter.Config[];
    };
};

export { _default as default };
