import { Props, th, Theme, useTheme, x } from '@xstyled/emotion';
import { DatabaseKind } from '../../lib/app/model/database-kind';
import { DiMsqlServer, DiMysql, DiPostgresql } from 'react-icons/di';
import Select, {
  OptionProps,
  SingleValueProps,
  components,
  StylesConfig,
} from 'react-select';
import { CSSObject } from '@emotion/serialize';
import { useCallback } from 'react';

export interface DatabaseKindSingleValueProps extends SingleValueProps<{}> {
  data: {
    value: DatabaseKind;
  };
}
export interface DatabaseKindOptionProps extends OptionProps<{}, false> {
  data: {
    value: DatabaseKind;
  };
}

const IconMap: Record<DatabaseKind, JSX.Element> = {
  [DatabaseKind.PostgreSQL]: <DiPostgresql />,
  [DatabaseKind.MySQL]: <DiMysql />,
  [DatabaseKind.MSSQL]: <DiMsqlServer />,
};

export function DatabaseKindSingleValue(
  props: DatabaseKindOptionProps,
): JSX.Element {
  return (
    <components.SingleValue {...props}>
      {IconMap[props.data.value]}
      {props.data.value}
    </components.SingleValue>
  );
}

export function DatabaseKindOption(
  props: DatabaseKindOptionProps,
): JSX.Element {
  return (
    <components.Option {...props}>
      {IconMap[props.data.value]}
      {props.data.value}
    </components.Option>
  );
}

const AvailableOptions = Object.values(DatabaseKind).map((value) => ({
  label: value,
  value,
}));

const CommonStyle = (props: Props<Theme>): CSSObject => ({
  backgroundColor: th.color('bg')(props) as string,
  color: th.color('fg')(props) as string,
});

const Styles = (props: Props<Theme>): StylesConfig<{}, false> => {
  const common = CommonStyle(props);
  return {
    control: (provided) => ({ ...provided, ...common }),
    singleValue: (provided) => ({ ...provided, ...common }),
    option: (provided, state) => ({
      ...provided,
      ...common,
      ...(state.isSelected
        ? { backgroundColor: th.color('bgDarken')(props) as string }
        : {}),
      '&:hover': {
        backgroundColor: th.color('bgBrighten')(props) as string,
      },
    }),
    menu: (provided) => ({ ...provided, ...common }),
    dropdownIndicator: (provided) => ({ ...common, ...provided }),
    indicatorSeparator: (provided) => ({ ...common, ...provided }),
    placeholder: (provided) => ({ ...provided, ...common }),
  };
};

export interface DatabaseKindSelectProps {
  name?: string;
  required?: boolean;
  onSelect?: (kind: DatabaseKind) => unknown;
}

export function DatabaseKindSelect({
  onSelect,
  ...props
}: DatabaseKindSelectProps): JSX.Element {
  const theme = useTheme();

  const handleChange = useCallback(
    (option: typeof AvailableOptions[number]) => {
      onSelect?.(option.value);
    },
    [onSelect],
  );

  return (
    <Select
      options={AvailableOptions}
      onChange={handleChange}
      components={{
        Option: DatabaseKindOption,
        SingleValue: DatabaseKindSingleValue,
      }}
      styles={Styles({ theme })}
      {...props}
    />
  );
}
