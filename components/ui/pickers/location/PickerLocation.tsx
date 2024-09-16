'use client';
import styles from './pickerLocation.module.scss';
import { useEffect, useState } from 'react';
import { BtnIcon } from '../../buttons/icon/BtnIcon';
import { SvgHandler } from '@/components/SvgHandler';
import { EIconsSet, ICountry, ICity } from '@/typings';
import { Overlay } from '../../overlay/Overlay';
import { countriesSet, citiesSet } from '@/libs/location';
import { BtnPrimary } from '../../buttons/primary/BtnPrimary';
import { Filter } from '../../filter/Filter';

interface Props {
  value: string | null;
  disabled?: boolean;
  onApprove: (v: string) => void;
}

export const PickerLocation = ({ value, disabled, onApprove }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState<ICountry | null>(null);
  const [countryFilter, setCountryFilter] = useState<string>('');
  const [countries, setCountries] = useState<ICountry[]>([]);

  const [cities, setCities] = useState<ICity[]>([]);
  const [cityFilter, setCityFilter] = useState<string>('');
  const [city, setCity] = useState<ICity | null>(null);

  useEffect(() => {
    if (countryFilter.length >= 2) {
      const filtered = countriesSet
        .filter((country) => country.name.toLowerCase().startsWith(countryFilter.toLowerCase()))
        .slice(0, 5);
      setCountries(filtered);
    }
  }, [countryFilter]);

  useEffect(() => {
    if (cityFilter.length >= 2) {
      const filtered = citiesSet
        .filter(
          (city) =>
            city.countryCode === country?.isoCode &&
            city.name.toLowerCase().startsWith(cityFilter.toLowerCase())
        )
        .slice(0, 5);
      setCities(filtered);
    }
  }, [cityFilter, country?.isoCode]);

  useEffect(() => {
    setCityFilter('');
    setCity(null);
    setCities([]);
  }, [country?.name]);

  const handleCountry = (v: ICountry) => {
    setCountry(v);
    setCountryFilter('');
    setCountries([]);
  };

  const handleCity = (v: ICity) => {
    setCity(v);
    setCityFilter('');
    setCities([]);
  };

  const handleApprove = () => {
    onApprove(`${city?.name}, ${country?.isoCode} ${country?.flag}`);
    setIsOpen(false);
  };

  const handleOpen = () => {
    if (!disabled) {
      setIsOpen(true);
    }
  };

  return (
    <div className={`${styles.pickerLocation} ${disabled ? styles.pickerDis : styles.pickerDef}`}>
      <p className={styles.label}>Select location</p>
      <button type="button" className={styles.openBtn} onClick={handleOpen}>
        <span>{value}</span>
        <SvgHandler icon={EIconsSet.Location} />
      </button>
      {isOpen && (
        <Overlay onClose={() => setIsOpen(false)}>
          <div className={styles.container}>
            <div className={styles.head}>
              <BtnIcon
                title="Close"
                tonal
                onClick={() => setIsOpen(false)}
                icon={EIconsSet.Cross}
              />
            </div>
            <div className={styles.wrapper}>
              <Filter
                label="Select country"
                id="country"
                selected={country}
                list={countries}
                value={countryFilter}
                onClick={() => setCountry(null)}
                onType={(v) => setCountryFilter(v)}
                onSelect={(el) => handleCountry(el as ICountry)}
              />
              {country && (
                <Filter
                  label="Select city"
                  id="city"
                  selected={city}
                  list={cities}
                  value={cityFilter}
                  onClick={() => setCity(null)}
                  onType={(v) => setCityFilter(v)}
                  onSelect={(el) => handleCity(el as ICity)}
                />
              )}
              <BtnPrimary disabled={!city || !country} onClick={handleApprove}>
                Approve
              </BtnPrimary>
            </div>
          </div>
        </Overlay>
      )}
    </div>
  );
};
