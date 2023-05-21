import { Skeleton } from 'antd';
import PropTypes from 'prop-types';

function SkeletonProduct({ count, grid }) {
  return (
    <div className={`grid gap-5 lg:grid-cols-${grid}`}>
      {[...Array(count !== undefined ? count : 4)].map((value, index) => (
        <div key={index} className={'flex min-h-[450px] flex-col justify-between gap-y-5 rounded-xl border px-3 py-3'}>
          <Skeleton.Image active size={'large'} className={'!h-[250px] !w-full'} />
          <Skeleton.Input active size={'large'} className={'!h-[120px] !w-full'} />
          <Skeleton.Button active size={'large'} className={'!h-[40px] !w-full'} />
        </div>
      ))}
    </div>
  );
}

SkeletonProduct.propTypes = {
  count: PropTypes.number.isRequired,
  grid: PropTypes.number.isRequired,
};
export default SkeletonProduct;
