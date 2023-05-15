type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

const List = <T extends string | number>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        let key = index + 1;
        return (
          <div key={key} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default List;
