import { useContext } from 'react';
import { SettingsContext } from '../contexts/settings-context';
import type { SettingsContextValue } from '../contexts/settings-context';

export const useSettings = (): SettingsContextValue => useContext(SettingsContext);
