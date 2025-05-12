<<<<<<< HEAD
import { createContext, useContext } from "use-context-selector";
import type { Locale } from "@/i18n";
import { getLanguage } from "@/i18n/language";
=======
import {
  createContext,
  useContext,
} from 'use-context-selector'
import type { Locale } from '@/i18n'
import { getDocLanguage, getLanguage, getPricingPageLanguage } from '@/i18n/language'
import { noop } from 'lodash-es'
>>>>>>> main

type II18NContext = {
  locale: Locale;
  i18n: Record<string, any>;
  setLocaleOnClient: (_lang: Locale, _reloadPage?: boolean) => void;
};

const I18NContext = createContext<II18NContext>({
  locale: "zh-Hans",
  i18n: {},
  setLocaleOnClient: (_lang: Locale, _reloadPage?: boolean) => {},
});

export const useI18N = () => useContext(I18NContext);
export const useGetLanguage = () => {
  const { locale } = useI18N();

<<<<<<< HEAD
  return getLanguage(locale);
};
=======
  return getLanguage(locale)
}
export const useGetDocLanguage = () => {
  const { locale } = useI18N()

  return getDocLanguage(locale)
}
export const useGetPricingPageLanguage = () => {
  const { locale } = useI18N()

  return getPricingPageLanguage(locale)
}
>>>>>>> main

export default I18NContext;
