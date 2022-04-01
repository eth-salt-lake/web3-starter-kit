import { createContext, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_APP_THEME } from '../config';

interface Settings {
    theme: 'light' | 'dark';
}

export interface SettingsContextValue {
    settings: Settings;
    saveSettings: (update: Settings) => void;
}

interface SettingsProviderProps {
    children?: ReactNode;
}

export const restoreSettings = (): Settings | null => {
    let settings = null;

    try {
        const storedData: string | null = window.localStorage.getItem('settings');

        if (storedData) {
            settings = JSON.parse(storedData);
        } else {
            settings = {
                theme: DEFAULT_APP_THEME,
            };
        }
    } catch (err) {
        console.error(err);
    }

    return settings;
};

export const storeSettings = (settings: Settings): void => {
    window.localStorage.setItem('settings', JSON.stringify(settings));
};

export const SettingsContext = createContext<SettingsContextValue>({
    settings: { theme: DEFAULT_APP_THEME } as Settings,
    saveSettings: () => { }
});

export const SettingsProvider: FC<SettingsProviderProps> = (props) => {
    const { children } = props;
    const [settings, setSettings] = useState<Settings>({ theme: DEFAULT_APP_THEME });

    useEffect(() => {
        const restoredSettings = restoreSettings();

        if (restoredSettings) {
            setSettings(restoredSettings);
        }
    }, []);

    const saveSettings = (updatedSettings: Settings): void => {
        setSettings(updatedSettings);
        storeSettings(updatedSettings);
    };

    return (
        <SettingsContext.Provider
            value={{
                settings,
                saveSettings
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

SettingsProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const SettingsConsumer = SettingsContext.Consumer;
